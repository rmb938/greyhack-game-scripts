metax = include_lib("/lib/metaxploit.so")
if not metax then 
  metax = include_lib(current_path + "/metaxploit.so")
end if

if not metax then 
  exit("Error: Missing metaxploit library")
end if

Exploit = {"name": "", "address": null, "hasRequirement": false, "requirement": null}

/*
  Scan Vulns of a metaLib
*/
module.exports = function(metaLib)
  exploits = []
  scanResult = metax.scan(metaLib)
  for area in scanResult
    scanAddress = metax.scan_address(metaLib, area)
    segments = scanAddress.split("Unsafe check: ")[1:]

    for segment in segments
      labelStart = segment.indexOf("<b>")
      labelEnd = segment.indexOf("</b>")

      exploit = new Exploit
      exploit.name = segment[labelStart + 3: labelEnd]
      exploit.address = area
      exploit.hasRequirement = segment.indexOf("*") != null
      if (exploit.hasRequirement) then
        requirementStart = segment.indexOf("*")
        requirementEnd = segment.indexOf(".",requirementStart)
        exploit.requirement = segment[requirementStart+2:requirementEnd]
      end if

      exploits.push(exploit)
    end for

  end for

  return exploits
end function
