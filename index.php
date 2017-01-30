<html>
    <head>
        <title>TWIC</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="style.css">
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" src="node_modules/jquery-ui-dist/jquery-ui.min.js"></script>
        <script type="text/javascript" src="particles.js"></script>
    </head>
    <body>
        <div id="header-animation">
            <div id="animation-layout">

                <div class="circle first"></div>
                <div class="circle second"></div>
                <div class="circle third"></div>
                <div class="circle fourth"></div>
                <div class="circle fifth"></div>
            </div>
        </div>
        <?php require("templates/header.html"); ?> 
      
        <h1>The Social Learning Environment<span class="blue"><b>*</b></span> for B-Schools.</h1>
        <div class="content">
            <div class="block">
                <p>
                    <span class="blue"><b>*</b></span><b>Engagement</b> online is at <u>the heart of our product design</u>.<br/> 
                    This is why we have developped a technology combining a state-of-the-art <br/>
                    Learning Management System with 21st-Century social networking tools.
                </p>
                <button class="button">See Our Product<span class="arrow">></span></button>
            </div>
            <div class="block flex marged">
                <div class="quote">“</div>
                <div class="portrait"></div>
                <div class="citation-block">
                    <div class="citation">THE POWER OF NETWORKED EDUCATION</div>
                    <p>
                        <b>Edward Snyder</b>, Dean of Yale School of Management<br/>
                        ‘Dean of the year 2015’ by <img class="poets" src="assets/images/Poets-Quants-logo.jpg" />
                    </p>
                    
                </div>
            </div>
            <div class="block small-text">
                THEY TRUST US
            </div>
            <div class="schools">
                <div class="school">
                    <img src="assets/images/yale.svg"/>                    
                </div>
                <div class="school">
                    <img src="assets/images/insead.png"/>                   
                </div>
                <div class="school">
                    <img src="assets/images/nus.png"/>                   
                </div>
                <div class="school">
                    <img src="assets/images/ie.gif"/>                   
                </div>
                <div class="school">
                    <img src="assets/images/imd.png"/>                   
                </div>
                
            </div>
            <div class="schools"> 
                <div class="school">
                    <img src="assets/images/berkeley.svg"/>                    
                </div>
                <div class="school">
                    <img src="assets/images/university-of-oxford-said.gif"/>                   
                </div>
                <div class="school">
                    <img src="assets/images/HEC.png"/>                   
                </div>
                <div class="school">
                    <img src="assets/images/lsoe.jpg"/>                   
                </div>
                <div class="school">
                    <img src="assets/images/hkust.png"/>                   
                </div>
                
            </div>
            <div class="slider">
                <div class="slider-point selected"></div>
                <div class="slider-point"></div>
                <div class="slider-point"></div>
            </div>
        </div>
       
        <?php require("templates/footer.html"); ?> 
    </body>
</html>
