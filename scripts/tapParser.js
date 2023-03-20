const fs = require('fs');

const { Sequelize, DataTypes } = require('sequelize');
const { parse } = require('tap-parser');
const { v4: uuidv4 } = require('uuid');

const sequelize = new Sequelize(
  process.env.DB_URI, // || 'sqlite::/Users/julien/Projects/test-results.sqlite',
);

const Log = sequelize.define(
  'Log',
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
    testType: {
      type: DataTypes.ENUM('unit', 'integration'),
      alowNull: false,
    },
    testSerial: {
      type: DataTypes.STRING,
      alowNull: false,
    },
    testStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    testDuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    testName: {
      type: DataTypes.STRING(500),
      defaultValue: '',
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
  {
    underscored: true,
    updatedAt: false,
  },
);

(async () => {
  const executionId = uuidv4();

  const testType =
    typeof process.argv.slice(2) === 'object' && process.argv.slice(2).length > 0
      ? process.argv.slice(2)[0]
      : 'unit';
  const filePath =
    typeof process.argv.slice(3) === 'object' && process.argv.slice(3).length > 0
      ? process.argv.slice(3)[0]
      : '';
  const fileStats = fs.statSync(filePath);
  const tapData = fs.readFileSync(filePath);
  const result = parse(tapData);

  try {
    await sequelize.authenticate();
    await Log.sync({ alter: true });

    result.forEach(async row => {
      if (row[0] === 'assert') {
        const { ok, name } = row[1];
        const testRegex =
          /(?<testSerial>\w{4}\.\w{3,4}(\.\w{3,4})?) (?<testName>.*) \((?<testDuration>\d+)\)/gm;
        const { testSerial, testName, testDuration } = testRegex.exec(name).groups;

        if (!testSerial || !testName || !testDuration) return;
        const l = await Log.create({
          platform: 'web',
          testType,
          testSerial,
          testStatus: ok,
          testDuration,
          testName,
          testExecutionId: executionId,
          testExecutedAt: fileStats.mtime,
        });
        l.save();
      }
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
