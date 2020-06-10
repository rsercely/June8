Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Logitech USB Headset H390").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Logitech USB Headset H390")_;_script infofile_;_ZIP::ssf2.xml_;_

If Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").Exist(30) Then
	wait 2
	Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").Click
End If

curScore = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").GetROProperty ("innertext") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf3.xml_;_
If cdbl(curScore) > 10.0 Then
	Reporter.ReportEvent micPass, "score", "Score looks fine"
else
	Reporter.ReportEvent micFail, "score", "Score is unaceptable"
End If
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf3.xml_;_


Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").Check CheckPoint("9.3") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf4.xml_;_


Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf5.xml_;_
