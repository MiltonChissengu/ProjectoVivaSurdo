const miss = document.querySelector(".sub-missao input"),
vis = document.querySelector(".sub-visao input"),
val = document.querySelector(".sub-valores input"),
txt_miss = document.querySelector(".text-missao"),
txt_vis = document.querySelector(".text-visao"),
txt_val = document.querySelector(".text-valores"),
lab_mis = document.querySelector(".sub-missao .label"),
lab_vis = document.querySelector(".sub-visao .label"),
lab_val = document.querySelector(".sub-valores .label")


miss.addEventListener("click",()=>{
    lab_mis.classList.remove("remove")
    lab_vis.classList.add("remove")
    lab_val.classList.add("remove")
    txt_miss.classList.remove("remove");
    txt_vis.classList.add("remove");
    txt_val.classList.add("remove");
});
vis.addEventListener("click",()=>{
    lab_mis.classList.add("remove")
    lab_vis.classList.remove("remove")
    lab_val.classList.add("remove")
    txt_miss.classList.add("remove");
    txt_vis.classList.remove("remove");
    txt_val.classList.add("remove");
});
val.addEventListener("click",()=>{
    lab_mis.classList.add("remove")
    lab_vis.classList.add("remove")
    lab_val.classList.remove("remove")
    txt_miss.classList.add("remove");
    txt_vis.classList.add("remove");
    txt_val.classList.remove("remove")
});
