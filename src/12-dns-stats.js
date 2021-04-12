/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsCounter = {};
  const domainLevels = [];

  // eslint-disable-next-line array-callback-return
  domains.reduce((counter, el, i) => {
    domainLevels.push(el.split('.').reverse());

    for (let j = domainLevels[i].length; j > 0; j--) {
      const domainName = `.${domainLevels[i].slice(0, j).join('.')}`;

      if (domainsCounter[domainName] !== undefined) {
        domainsCounter[domainName] += 1;
      } else {
        domainsCounter[domainName] = 1;
      }
    }
  }, domainsCounter);

  return domainsCounter;
}

module.exports = getDNSStats;
