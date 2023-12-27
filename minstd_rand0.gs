#import minstd_rand0_range from libs/minstd_rand0_range.gs;

print_usage = function()
  exit("<b>Usage: minstd_rand0 [seed] [count]</b>")
end function

seed = rnd()
count = 1

if (len(params) >= 1) then
  if params[0] == "-h" or params[0] == "--help" then print_usage()

  seed = params[0].to_int()
  if (seed == params[0]) then
    print_usage()
  end if
end if

if (len(params) == 2) then
  count = params[1].to_int()

  if (count == params[1]) then
    print_usage()
  end if
end if

for ri in minstd_rand0_range(0, 2147483647, seed, count)
  print(ri)
end for
