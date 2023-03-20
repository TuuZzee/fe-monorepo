import { DateTime } from 'luxon';
import tzdata from 'tzdata';

const luxonValidTimezones = [
  ...new Set(
    Object.keys(tzdata.zones).filter(
      tz => tz.includes('/') && DateTime.local().setZone(tz).isValid,
    ),
  ),
].sort((a, b) => (a < b ? -1 : 1));

export default luxonValidTimezones;
