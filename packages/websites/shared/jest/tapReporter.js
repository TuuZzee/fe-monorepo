const fs = require('fs');
const path = require('path');

class TapReporter {
  constructor(_globalConfig, options) {
    this.outputFile = options.outputFile;
  }

  onRunComplete(_contexts, results) {
    const { testResults: testSetResults, numTotalTests } = results;
    const tap = [`1..${numTotalTests}`];

    let idx = 1;

    testSetResults.forEach(testSetResult => {
      const { testResults } = testSetResult;

      testResults.forEach(test => {
        const ok = test.status === 'passed' || test.status === 'pending' ? 'ok' : 'not ok';
        const title = `${test.ancestorTitles.join(' ')} > ${test.title}`;

        tap.push(
          `${ok} ${idx} - ${title} (${test.duration})${test.status === 'pending' ? ' # SKIP' : ''}`,
        );
        idx += 1;
      });
    });

    const reportString = tap.join('\n');

    if (this.outputFile) {
      fs.mkdirSync(path.dirname(this.outputFile), { recursive: true });
      fs.writeFileSync(this.outputFile, `${reportString}\n`);
    } else {
      // eslint-disable-next-line no-console
      console.log(reportString);
    }
  }
}

module.exports = TapReporter;
