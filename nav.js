let activePage = window.location.pathname;
console.log(activePage);

let navLinks=document.querySelectorAll('.nav-links a'); 
//console.log(navLinks)
//it will provide me all the a tag inside the nav tag as a nodeList

navLinks.forEach((eachLink)=>{
    // console.log(activePage);
    if(eachLink.href.includes(activePage)){ 
        /* it will each each anchor tag href and if that meets 
        the condtion then it will ad id on that anchor tag named as active */

        // console.log(eachLink.href);
        eachLink.id='active';
    }

    if(activePage.includes('health_track.html')){
         //checking loaded page pathname weather it  is health_track.html or not using inlcudes method
        if(eachLink.href.includes('blog.html')){ 
            //eachLink is an anchor tag and checking each Anchor tag and if the anchor tag href meet this condtion
            eachLink.id='active'; //then this line will add id named as active in that condn meeeted class 
            
        }
    }

        // similar checking for all rest of all those_pages which lies under the blog page
    if(activePage.includes('heritage_meets.html')){
        if(eachLink.href.includes('blog.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes('impact_of_tech.html')){
        if(eachLink.href.includes('blog.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes('innov_of_smart.html')){
        if(eachLink.href.includes('blog.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes('Research_lux_watch.html')){
        if(eachLink.href.includes('blog.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes('versus.html')){
        if(eachLink.href.includes('blog.html')){
            eachLink.id='active';
        }
    }


    // similar checking for all rest of all those_pages which lies under the About Us page
    if(activePage.includes('abhishek.html')){
        if(eachLink.href.includes('aboutUs.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes('abi.html')){
        if(eachLink.href.includes('aboutUs.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes('annCV.html')){
        if(eachLink.href.includes('aboutUs.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes('PreetikaCV.html')){
        if(eachLink.href.includes('aboutUs.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes('sajalCV.html')){
        if(eachLink.href.includes('aboutUs.html')){
            eachLink.id='active';
        }
    }
    


    //navigation setup for product page

    //rolex
    if(activePage.includes("Rolex_Datejust_36.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    if(activePage.includes("Rolex_Day_Date_40.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    if(activePage.includes("Rolex_GMT_Master.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    if(activePage.includes("Rolex_Submariner.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }



    //Emperio Armani

    if(activePage.includes("EA_Black_Strap.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes("EA_Chronograph-Watch.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes("EA_GMT_Blue.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes("EA_GMT_Dual.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    //Omega
    if(activePage.includes("Omega_Dark_Side.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    if(activePage.includes("Omega_Dark_Nylon.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    if(activePage.includes("Omega_Datejust_36.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    if(activePage.includes("Omega_Speedmaster_Moon.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    //patek
    if(activePage.includes("Patek_Complication.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    if(activePage.includes("Patek_Cubitus.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    if(activePage.includes("Patek_Golden_Ellipse.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    if(activePage.includes("Patek_Gondolo.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    //fastTrack
    if(activePage.includes("Fast_Track_Reflex_Nitro_Blue.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

    if(activePage.includes("Fast_Track_Reflex_Vox_2.0.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes("Fast_Track_Reflex_Horizon.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }
    if(activePage.includes("Fast_Track_Revoltt.html")){
        if(eachLink.href.includes('product.html')){
            eachLink.id='active';
        }
    }

})



