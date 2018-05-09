
export default function results(ua_str, ua, os, device) {
  this.userAgent = ua_str;
  this.ua = ua;
  this.os = os;
  this.device = device;
  delete ua.userAgent;
  delete os.userAgent;
  delete device.userAgent;
}
