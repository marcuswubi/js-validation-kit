const Regex = require("./../regexs/Regexs");
const RgxPresets = require("./../regexs/RgxPresets");

const Networks = {
  is_url: val => Regex.matchRegexp(val, RgxPresets.Url),
  is_domain: val => Regex.matchRegexp(val, RgxPresets.Domain),
  is_weak_domain: val => Regex.matchRegexp(val, RgxPresets.WeakDomain),
  is_email: val => Regex.matchRegexp(val, RgxPresets.Email),
  is_email_with_tld: val => Regexs.matchRegexp(val, RgxPresets.EmailWithTLD),
  is_ip: val => Regex.matchRegexp(val, RgxPresets.IP),
  is_ipv4: val => Regex.matchRegexp(val, RgxPresets.IPv4),
  is_ipv6: val => Regex.matchRegexp(val, RgxPresets.IPv6)
};

module.exports = Networks;
