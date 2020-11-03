function yazisil(x)
{
    if( x=="ad" || x=="soyad"  || x=="dogumtarixi" || x=="nomre"  || x=="Nelson")
    {
        document.getElementById(x).value="";
    }
}

function melumatyoxla(){
    if(document.getElementById("ad").value=="Johnny")
    {document.getElementById("adyoxla").innerHTML="Adinizi yazin !";}
    if(document.getElementById("soyad").value=="Nelson")
    {document.getElementById("soyadyoxla").innerHTML="Soyadinizi yazin !";}
    if(document.getElementById("nomre").value=="Nomrenizi Yazin")
    {document.getElementById("nomreyoxla").innerHTML="Nomrenizi Yazin !";}
 
    
    
    
    
    
    

}