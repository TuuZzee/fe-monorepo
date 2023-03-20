const fs = require('fs');

const { Sequelize, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const sequelize = new Sequelize(
  process.env.DB_URI, // || 'sqlite::/Users/julien/Projects/test-results.sqlite',
);

const CoverageLog = sequelize.define(
  'CoverageLog',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    platform: {
      type: DataTypes.ENUM('web', 'backend', 'ios', 'android'),
      alowNull: false,
    },
    category: {
      type: DataTypes.ENUM('lines', 'statements', 'functions', 'branches'),
      alowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    covered: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    testExecutionId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    testExecutedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { underscored: true, updatedAt: false },
);

(async () => {
  const executionId = uuidv4();

  const filePath =
    typeof process.argv.slice(2) === 'object' && process.argv.slice(2).length > 0
      ? process.argv.slice(2)[0]
      : '';
  const fileStats = fs.statSync(filePath);

  const coverageData = fs.readFileSync(filePath);
  const result = JSON.parse(coverageData);

  try {
    await sequelize.authenticate();
    await CoverageLog.sync({ alter: true });
    const { total } = result;

    Object.keys(total).forEach(async category => {
      if (category === 'branchesTrue') return;

      const { total: categoryTotal, covered: categoryCovered } = total[category];
      const l = await CoverageLog.create({
        platform: 'web',
        category,
        total: categoryTotal,
        covered: categoryCovered,
        testExecutionId: executionId,
        testExecutedAt: fileStats.mtime,
      });
      l.save();
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
