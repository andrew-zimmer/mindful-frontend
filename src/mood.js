class Mood {
  static all = [];

  constructor({ user_id, mood, comment, created_at }) {
    this.id = user_id;
    this.mood = mood;
    this.comment = comment;
    this.createdAt = created_at;

    Mood.all.push(this);
  }

  static renderMoodForm() {
    console.log("click");
    let mainDiv = document.getElementById("main");
    let btn = document.createElement("button");
    mainDiv.innerHTML = `<h2> How are you feeling? </h2>`;
    btn.innerText = "Next";

    btn.addEventListener("click", () => {
      const moodSelect = document.getElementsByClassName("mood-button-active");
      mood = moodSelect[0].id;
      Mood.renderCommentField();
      //show which emotion they chose
    });

    let emoteDiv = document.createElement("div");
    emoteDiv.classList.add("row", "text-center");
    for (const mood in emotions) {
      let divIt = document.createElement("div");
      divIt.classList.add(
        "emote",
        "col-3",
        "border",
        "border-solid",
        "mood-button",
        "text-center"
      );

      divIt.id = mood;

      divIt.innerHTML = emotions[mood].pic + `<br> ${mood}`;
      emoteDiv.append(divIt);

      divIt.addEventListener("click", (e) => {
        let currentAct = document.getElementsByClassName("mood-button-active");
        if (!currentAct[0]) {
          divIt.classList.add("mood-button-active");
        } else {
          currentAct[0].classList.remove("mood-button-active");
          divIt.classList.add("mood-button-active");
        }
      });
    }
    mainDiv.append(emoteDiv);
    mainDiv.append(btn);
  }

  static renderCommentField() {
    let mainDiv = document.getElementById("main");
    let form = document.createElement("form");

    form.innerHTML = `<textarea id='comment' class='w-100'>
        Was is it something someone said or did that triggered me?
        Why is this important to me?
        Is there a pattern in how I emotionally react?
        What can I do right now to feel better?
        </textarea>
        <button id='backBtn'>Back</button>
        <button id='submitComment'> Submit </button>`;

    mainDiv.innerHTML = "<h2>Lets ask ourselves a few questions.</h2>";
    mainDiv.append(form);

    let btn = document.getElementById("submitComment");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clicky clack mf");
      moodAdapter.sendNewMoodFetch();
    });

    const backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      Mood.renderMoodForm();
      document.getElementById(mood).classList.add("mood-button-active");
    });
  }

  static renderMyChart() {
    const moodDates = Mood.all.map((x) => x.createdAt);
    let minDate = 0;
    let moodDateArray = uniqDate().slice(minDate, uniqDate().length);
    let mainDiv = document.getElementById("main");
    let myChart = document.createElement("canvas");
    myChart.id = "myChart";
    let moodChart = (min) =>
      new Chart(myChart, {
        type: "bar",
        data: {
          labels: uniqDate().slice(min, uniqDate().length), //dates Object.keys(emotions)
          datasets: moodDatasets(min),
        },
        options: {
          scales: {},
        },
      });
    myChart.append(moodChart(minDate));
    mainDiv.innerHTML = "";
    mainDiv.append(myChart);

    function uniqDate() {
      let array = [];
      moodDates
        .map((x) => x.slice(0, 10))
        .forEach((x) => {
          if (!array.find((y) => x === y)) {
            array.push(x);
          }
        });
      return array;
    }

    const rangeDiv = document.createElement("div");
    rangeDiv.classList.add("form-group");
    rangeDiv.innerHTML = `
            <label for="formControlRange">Start date: </label>
            <input type="date" class="form-control-range" id="formControlRange" min='${
              uniqDate()[0]
            }' max='${uniqDate()[uniqDate.length - 1]}'  value='${
      uniqDate()[0]
    }'>`;
    mainDiv.append(rangeDiv);

    document
      .getElementById("formControlRange")
      .addEventListener("input", (e) => {
        console.log(e.target.value);

        minDate = uniqDate().indexOf(e.target.value);

        myChart.innerHTML = "";
        myChart.append(moodChart(minDate));
      });

    //create array of dates
    //create second range bar
    //set range min to zero
    //set range max to range array length
    //change date start value when top bar moves
    // change date end value when bottom bar moves
    //set the bottom bar min based on the tops value

    function moodDatasets(min) {
      const arrayDate = [];
      Object.keys(emotions).forEach((e) => {
        const obj = {};
        const array = [];

        moodDateArray.slice(min, moodDateArray.length).forEach((date) => {
          array.push(
            Mood.all
              .filter((x) => x.createdAt.slice(0, 10) === date)
              .filter((x) => x.mood === e).length
          );
        });

        obj["label"] = e;
        obj["data"] = array;
        obj["backgroundColor"] = emotions[e].backgroundColor;
        arrayDate.push(obj);
      });
      return arrayDate;
    }

    //mood filter

    let body = document.getElementsByTagName("body");

    let newDiv = document.createElement("div");
    newDiv.classList.add("container", "border", "border-solid", "rounded");
    let newSelect = document.createElement("select");
    let moodsDiv = document.createElement("div");

    let uniqMood = () => {
      let arr = [];
      this.all.forEach((x) => {
        if (!arr.includes(x.mood)) {
          arr.push(x.mood);
        }
      });
      return arr;
    };
    moodsDiv.id = "moods";
    moodsDiv.innerHTML = this.all.map(
      (x) =>
        `<h3 class='${x.mood} text-center'> ${x.mood}</h3><p>Date: ${x.createdAt}</p><p class='text-center border border-solid'>${x.comment}</p>`
    );
    let renderMoods = (e) => {
      let moods = document.getElementById("moods");
      moods.innerHTML = "";
      if (e.target.value === "none") {
        moods.innerHTML = this.all.map(
          (x) =>
            `<h3 class='${x.mood} text-center'> ${x.mood}</h3><p>Date: ${x.createdAt}</p><p class='text-center border border-solid'>${x.comment}</p>`
        );
      } else {
        moods.innerHTML = this.all
          .filter((x) => x.mood === e.target.value)
          .map(
            (x) =>
              `<h3 class='${x.mood} text-center'> ${x.mood}</h3><p>Date: ${x.createdAt}</p><p class='text-center border border-solid'>${x.comment}</p>`
          );
      }
    };
    newSelect.addEventListener("change", renderMoods);
    newSelect.innerHTML =
      `<option value="none" >No filter</option>` +
      uniqMood().map((mood) => `<option> ${mood}</option>`);
    newDiv.append(newSelect);
    newDiv.append(moodsDiv);
    body[0].append(newDiv);
  }

  static moodCount() {
    let array = [];
    Object.keys(emotions).forEach((e) => {
      array.push(this.all.filter((x) => x.mood === e).length);
    });

    return array;
  }
}
