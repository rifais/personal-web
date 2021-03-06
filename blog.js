let blogs = [];
const monthIndex = [
  "Jan", 
  "Feb", 
  "Mar", 
  "Apr", 
  "May", 
  "Jun", 
  "Jul", 
  "Aug", 
  "Sep", 
  "Oct", 
  "Nov", 
  "Dec"
];

function addBlog(event){
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')
    let dateFrom = document.getElementById('start-date').value
    let dateTo = document.getElementById('end-date').value
    let reactJs = document.getElementById('reactjs')
    let nodeJs = document.getElementById('nodejs')
    let nextJs = document.getElementById('nextjs')
    let typeScript = document.getElementById('typescript')

    if (nodeJs.style.visibility=="visible") {
      nodeJs.style.visibility="hidden";
}else {
      nodeJs.style.visibility="visible";
}

if (reactJs.style.visibility=="visible") {
  reactJs.style.visibility="hidden";
}else {
  reactJs.style.visibility="visible";
}

if (typeScript.style.visibility=="visible") {
  typeScript.style.visibility="hidden";
}else {
  typeScript.style.visibility="visible";
}

if (nextJs.style.visibility=="visible") {
  nextJs.style.visibility="hidden";
}else {
  nextJs.style.visibility="visible";
}


    image = URL.createObjectURL(image.files[0])

    let blog = {
        author : 'Rifai Suwarto',
        title,
        content,
        image,
        postedAt :new Date(),
        dateFrom :new Date(),
        dateTo :new Date(),
        reactJs,
        nodeJs,
        nextJs,
        typeScript,
    }

    blogs.push(blog)
    console.log(dateTo-dateFrom)

    // let test = document.getElementById('test')
    // test.innerHTML += `<img src ="${image}" />` 

    
    // console.log(image)
    // blogs.push(blog)
    
    renderBlog()
}

function renderBlog(){
    let lengthData = blogs.length

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = firstBlogContent()

    //Perulangan
    for (let i = 0; i < lengthData; i++){
        blogContainer.innerHTML += `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">

            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
              >
            </h1>
            <p style="text-align: center;">durasi : ${getDistanceMonth(blogs[i])} bulan</p>
            <div class="detail-blog-content">
            ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
            </div>
            <p>
            ${blogs[i].content}
            </p>
            <div style="text-align: right; color: gray; font-size: 15px;">
              <span>${getDistanceTime(blogs[i].postedAt)}</span>
            </div>
            <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          </div>
        </div>`
    }
}

function getFullTime(time){
  

    const date = time.getDate()
    const month = time.getMonth(monthIndex)
    const year = time.getFullYear()
    const hour = time.getHours()
    const minutes = time.getMinutes()

    // console.log(date)
    // console.log(month)
    // console.log(year)
    // console.log(hour)
    // console.log(minutes)

    return `${date} ${monthIndex[month]} ${year} ${hour}:${minutes} WIB `
}

function getDistanceTime(time){
    const distance = new Date () - new Date (time)
    const miliseconds = 1000
    const secondInMinute = 60
    const minuteInHour = 60
    const secondInHour = secondInMinute * minuteInHour
    const hoursInDay = 23

    let dayDistance = distance / (miliseconds*secondInHour*hoursInDay)

    if (dayDistance >= 1) {
      const time = Math.floor(dayDistance) + 'a day ago'
      console.log('time' + time);
      return time
    } else {
      //Convert to Hour
      let hourDistance = Math.floor(distance / (miliseconds*secondInHour))
      if (hourDistance > 0){
        return hourDistance + ' hour ago'
      } else {
        //Convert to Minutes
        const minuteDistance = Math.floor(distance / (miliseconds*secondInMinute))
        return minuteDistance + ' minute ago'
      }
    }
}

function getDistanceMonth(dateFrom, dateTo){
  return new Date(dateTo) - new Date(dateFrom)
}



setInterval(function(){
  renderBlog()
}, 2000)

function firstBlogContent(){
    return`
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt="" />
          </div>
          <div class="blog-content">
            
            <h1>
              <a href="blog-detail.html" target="_blank"
                >Dumbways App</a
              >
              
            </h1>
            <p style="text-align: center;">durasi : 3 bulan</p>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>
            <div style="text-align: right; color: gray; font-size: 15px;">
              <span>1 hour ago</span>
            </div>
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
          </div>
        </div>`
    
}