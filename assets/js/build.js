$(function(){if((t=document.createElement("div")).style.cssText="width: calc(10px)",!t.style.length){var e=document.createElement("link");e.setAttribute("href","css/no-calc.css"),e.setAttribute("rel","stylesheet"),document.body.appendChild(e)}var t}),$(function(){0<$("input.select-item").length&&$("input.select-item").click(function(){this.checked?$(this).closest("tr").addClass("tr-active"):$(this).closest("tr").removeClass("tr-active")})}),$(function(){0<$("#representative_plainPassword_first").length&&($("#js-passStatus").hide(),$("#representative_submit").click(function(){$("#js-passStatus").hide(),$("#representative_plainPassword_first").val()!=$("#representative_plainPassword_second").val()&&$("#js-passStatus").fadeIn()})),$(".input-date").on("change",function(){$(this).addClass("focus-date")})}),$(function(){if(0<$(".lot_newData").length){var e=$("#lot_manufactureForm option").data("price");$("input#lot_price").val(e),$("#lot_manufactureForm").on("change",function(){$("#lot_manufactureForm option:selected").each(function(){var e=$(this).data("price");$("#lot_price").val(e)})})}}),$(function(){if(0===$(".auth__holder").length){var e=document.getElementById("js-menuHolder"),t=document.getElementById("js-menu"),n=document.getElementById("js-blackLayer"),s=document.getElementById("js-mIcon"),i=document.getElementsByClassName("m-menu__icon")[0],c=document.getElementsByClassName("footer__holder")[0];e.addEventListener("click",function(){o()}),n.addEventListener("click",function(e){e.stopPropagation(),a()})}function o(){t.style.left="0",n.style.cssText="display: block; opacity: 1",c.style.cssText="background-color: rgba(17, 17, 17, 0.2);",s.classList.add("m-menu-opened"),s.style.cssText="left: 210px; top: 10px",i.style.cssText="height: 30px; width: 30px",i.addEventListener("click",function(e){e.stopPropagation(),a()}),i.removeEventListener("click",o)}function a(){t.removeAttribute("style"),n.removeAttribute("style"),c.removeAttribute("style"),s.removeAttribute("style"),i.removeAttribute("style"),s.classList.remove("m-menu-opened"),n.removeEventListener("click",a),i.removeEventListener("click",a),i.addEventListener("click",function(e){e.stopPropagation(),o()})}});