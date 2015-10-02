var hummus = require('hummus');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/api/certificate',function(req,res){

	var name = req.param('name');
	var college = req.param('college');
	var eventName = req.param('event');

	console.log(name);


	var pdfWriter = hummus.createWriterToModify('./input/certificate.pdf',{modifiedFilePath:'./output/sample4.pdf'});
	var pageModifier = new hummus.PDFPageModifier(pdfWriter,0);


	pageModifier.startContext().getContext().writeText(name,240,512,{font: pdfWriter.getFontForFile('./resources/font.ttf'),size: 18, colorspace: 'gray',color: 0x00});

	pageModifier.startContext().getContext().writeText(college,220,482,{font: pdfWriter.getFontForFile('./resources/font.ttf'),size: 18, colorspace: 'gray',color: 0x00});
	pageModifier.startContext().getContext().writeText(eventName,350,452,{font: pdfWriter.getFontForFile('./resources/font.ttf'),size: 18, colorspace: 'gray',color: 0x00});
	pageModifier.endContext().writePage();
	pdfWriter.end();

	console.log("Done ji done");


});

app.listen(port);
console.log("Server running...");