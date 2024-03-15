<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>


  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">


  <style>
    .searchInput input {
      height: 55px;
      width: 100%;
      outline: none;
      border: none;
      border-radius: 5px;
      padding: 0 0px 0 20px;
      font-size: 18px;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    }

    .searchInput.active input {
      border-radius: 5px 5px 0 0;
    }

    .searchInput .resultBox {
      padding: 0;
      opacity: 0;
      pointer-events: none;

      overflow-y: auto;
    }

    .searchInput.active .resultBox {
      padding: 10px 8px;
      opacity: 1;
      pointer-events: auto;
    }

    .resultBox li {
      list-style: none;
      padding: 8px 12px;
      display: none;
      width: 100%;
      cursor: default;
      border-radius: 3px;
    }

    .searchInput.active .resultBox li {
      display: block;
    }

    .resultBox li:hover {
      background: #efefef;
    }

    .searchInput .icon {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 55px;
      width: 55px;
      text-align: center;
      line-height: 55px;
      font-size: 20px;
      color: #644bff;
      cursor: pointer;
    }


    .sugestionsearch {
      position: relative;
      box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    }


    .sugestionsearch:hover {
      cursor: pointer;
    }


    .sugestionsearch span {
      position: absolute;
      padding-left: 20px;

      color: #125DFC;
    }

    .sugestionsearch img {
      width: 100px;


    }
  </style>
</head>

<body>



  <div class="searchInput">
    <input type="text" placeholder="Search Product">
    <div class="resultBox">
      <!-- here list are inserted from javascript -->
    </div>
    <div class="icon"><i class="fas fa-search"></i></div>
  </div>




  <script>
    let suggestions = [
      "Channel",
      "CodingLab",
      "CodingNepal",
      "YouTube",
      "YouTuber",
      "YouTube Channel",
      "Blogger",
      "Bollywood",
      "Vlogger",
      "Vechiles",
      "Facebook",
      "Freelancer",
      "Facebook Page",
      "Designer",
      "Developer",
      "Web Designer",
      "Web Developer",
      "Login Form in HTML & CSS",
      "How to learn HTML & CSS",
      "How to learn JavaScript",
      "How to became Freelancer",
      "How to became Web Designer",
      "How to start Gaming Channel",
      "How to start YouTube Channel",
      "What does HTML stands for?",
      "What does CSS stands for?",
    ];

    // getting all required elements
    const searchInput = document.querySelector(".searchInput");
    const input = searchInput.querySelector("input");
    const resultBox = searchInput.querySelector(".resultBox");
    const icon = searchInput.querySelector(".icon");
    let linkTag = searchInput.querySelector("a");
    let webLink;

    // if user press any key and release
    input.onkeyup = (e) => {
      let userData = e.target.value; //user enetered data
      let emptyArray = [];
      if (userData) {
        emptyArray = suggestions.filter((data) => {
          //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
          // passing return data inside li tag
          return data = '<li class="sugestionsearch">'
            + '<img src="./asset/img/7xm.xyz181976.jpg"/><span class=""> Shirt Design</span> ' +

            '</li>';
        });
        searchInput.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = resultBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
          //adding onclick attribute in all li tag
          allList[i].setAttribute("onclick", "select(this)");
        }
      } else {
        searchInput.classList.remove("active"); //hide autocomplete box
      }
    }

    function showSuggestions(list) {
      let listData;
      if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
      } else {
        listData = list.join('');
      }
      resultBox.innerHTML = listData;
    }
  </script>
</body>

</html>