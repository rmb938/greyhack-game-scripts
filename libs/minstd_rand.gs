/*
  MINSTD Random Function based on https://en.wikipedia.org/w/index.php?title=Lehmer_random_number_generator&oldid=1170025807
*/
module.exports = function(seed, size=1)

  mult = 48271 // Multiplier set to 48271 based on criticism by Park, Miller & Stockmeyer
  mod = (2^31)-1 // Modulo recommended by Park & Miller

  U = []
  // Populate 0 with zeros
  for i in range(0, size-1)
      U = U.insert(i, 0)
  end for

  // generate first random number using seed
  x = (seed*mult+1)%mod
  U[0] = x/mod

  // generate other random numbers using x as a base
  if (len(U) > 1) then
      for i in range(1, size-1)
          x = (x*mult+1)%mod
          U[i] = x/mod
      end for
  end if

  return U

end function
