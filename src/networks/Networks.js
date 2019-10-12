const Regex = require('./../regexs/Regexs');
const RgxPresets = require('./../regexs/RgxPresets');

const Networks = {
  is_url: (val) => Regex.matchRegexp(val, RgxPresets.Url),
  isDomain: (val) => Regex.matchRegexp(val.replace(/(^\w+:|^)\/\//, ''), RgxPresets.Domain),
  isWeakDomain: (val) => Regex.matchRegexp(val, RgxPresets.WeakDomain),
  isEmail: (val) => Regex.matchRegexp(val, RgxPresets.Email),
  isEmailWithTld: (val) => Regex.matchRegexp(val, RgxPresets.EmailWithTLD),
  isIp: (val) => Regex.matchRegexp(val, RgxPresets.IP),
  isIpv4: (val) => Regex.matchRegexp(val, RgxPresets.IPv4),
  isIpv6: (val) => Regex.matchRegexp(val, RgxPresets.IPv6),
};

module.exports = Networks;
