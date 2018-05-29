function changePeople(){
    var words = [
        "<span style='color: #158CEA !important'>communities</span> to be  healthier and thrive",
        "<span style='color: #158CEA !important'>physicians</span> with connective technology",
        "<span style='color: #158CEA !important'>families</span> to care for their loved ones",
        "<span style='color: #158CEA !important'>patients</span> to take control of their health",
        ], i = 0;
    setInterval(function(){
        $('#people').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 4000);
        
};

$(".logo").fadeIn(2000,function(){})
 
$(".tagline").fadeIn(4000,function(){
    $(".finalTagline").fadeIn(2000)
})

changePeople()