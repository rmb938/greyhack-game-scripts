#import minstd_rand0 from minstd_rand0.gs;

module.exports = function(low=0, high=2147483647, seed, size=1)

  U = []
  for ri in minstd_rand0(seed, size)
    U = U.push(floor(low+(high-low)*ri))
  end for

  return U

end function
