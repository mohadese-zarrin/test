import React, { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

const data = [
  { title: 'test' },
  { title: 'test' },
  { title: 'test' },
  { title: 'test' },
  { title: 'test' },
  { title: 'test' },
]
const data22 = [
  { title: 'test22' },
  { title: 'test22' },
  { title: 'test22' },
  { title: 'test22' },
  { title: 'test22' },
  { title: 'test22' },
]
function Profile() {
  const [textValue, setTextValue] = useState("test");
  const [loading, setloading] = useState(false)
  const [formdata, setFormdata] = useState([
    { title: 'test' },
    { title: 'test' },
    { title: 'test' },
    { title: 'test' },
    { title: 'test' },
    { title: 'test' },
  ]);
  const [data2, setData2] = useState([
    { title: 'test22' },
    { title: 'test22' },
    { title: 'test22' },
    { title: 'test22' },
    { title: 'test22' },
    { title: 'test22' },
  ])

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 1000);
  });

  myPromise.then((value) => setTextValue(value));

  // window.onscroll = function () { myFunction() };
  // let header = document.getElementById("sample-header");
  // let sticky = header.offsetTop;

  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }

  const trackScrolling = (e) => {
    const bottom = e.target.clientHeight - 50 < e.target.scrollHeight - e.target.scrollTop < e.target.clientHeight;
    // console.log(e.target.scrollHeight - e.target.scrollTop, e.target.clientHeight, '***keep calm***');
    if (bottom) {
      loadData()
    }
  }
  const loadData = () => {
    setloading(true)
    if (formdata.length < 100) {
      setTimeout(() => {
        setFormdata([...formdata, ...data])
        setloading(false)
      }, 1000);
    } else {
      setloading(false)
    }

  }

  console.log(formdata.length);
  return (
    <div className=" main-pages profile center-content">
      <div className='scroll-view' id='scrollableDiv' onScroll={trackScrolling}>
        <div className='sample-child'></div>
        <div style={{ backgroundColor: 'blue', color: 'white', padding: 8 }} className='sample-header'>Header</div>
        {formdata.map((data, index) =>
          <div className='sample-child'>{data.title}{index}</div>
        )}
        {loading && <div style={{ backgroundColor: 'red' }} className='sample-child'> loading....</div>}
      </div>


    </div>
  );
}

export default Profile;
