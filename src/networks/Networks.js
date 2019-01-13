const Regex = require("./../regexs/Regexs");
const RgxPresets = require("./../regexs/RgxPresets");

const Networks = {
  is_url: val => Regex.match_regexp(val, RgxPresets.Url),
  is_domain: val =>
    Regex.match_regexp(val.replace(/(^\w+:|^)\/\//, ""), RgxPresets.Domain),
  is_weak_domain: val => Regex.match_regexp(val, RgxPresets.WeakDomain),
  is_email: val => Regex.match_regexp(val, RgxPresets.Email),
  is_email_with_tld: val => Regexs.match_regexp(val, RgxPresets.EmailWithTLD),
  is_ip: val => Regex.match_regexp(val, RgxPresets.IP),
  is_ipv4: val => Regex.match_regexp(val, RgxPresets.IPv4),
  is_ipv6: val => Regex.match_regexp(val, RgxPresets.IPv6)
};

module.exports = Networks;
