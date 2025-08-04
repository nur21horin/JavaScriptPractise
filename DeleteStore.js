var fileName="pdfData.jpg"
var file=(fileName.split(".").pop())

if(fileName[0]=="#" ){
     console.log("Store");
}
else if( file=="pdf" || file=="docx") {
   console.log("Store")
} else{
    console.log("Delete")
}      