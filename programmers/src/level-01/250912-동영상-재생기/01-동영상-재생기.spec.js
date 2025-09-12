import { solution } from './01-동영상-재생기';

/**
video_len   pos       op_start   op_end 	 commands                   result
"34:33"	    "13:00"	  "00:55"	   "02:55"   ["next", "prev"]           "13:00"
"10:55"   	"00:05"   "00:15"    "06:55"   ["prev", "next", "next"]	  "06:55"
"07:22"	    "04:05"   "00:15"    "04:07"   ["next"]	                  "04:17"
 */

describe('250912 / 01-동영상-재생기', () => {
  it('solution() === "13:00"', () => {
    const result = solution('34:33', '13:00', '00:55', '02:55', ['next', 'prev']);
    expect(result).toBe('13:00');
  });

  it('solution() === "06:55"', () => {
    const result = solution('10:55', '00:05', '00:15', '06:55', ['prev', 'next', 'next']);
    expect(result).toBe('06:55');
  });

  it('solution() === "04:17"', () => {
    const result = solution('07:22', '04:05', '00:15', '04:07', ['next']);
    expect(result).toBe('04:17');
  });
});
