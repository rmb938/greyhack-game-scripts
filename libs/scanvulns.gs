metax = include_lib("/lib/metaxploit.so")
if not metax then exit("Error: Missing metaxploit library")

Exploit = {"name": "", "address": null, "hasRequirement": false, "requirement": null}

/*
  Scan Vulns of a metaLib
*/
scanvulns = function(metaLib)
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
        exploit.requirement = segment[segment.indexOf("*")+2:segment.indexOf(".",segment.indexOf("*"))]
      end if


      exploits.push(exploit)
    end for

  end for

  print("Available vulnerabilities:")
  for exploit in exploits
    print("====================")
    print(" Name: "+exploit.name)
    print(" Address: "+exploit.address)
    print(" Requirement: "+exploit.requirement)
  end for
end function
