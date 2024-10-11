import logo from './logo.svg';
import './App.css';
import './common.css'


import Header from './component/Header';
import BannerHero from './component/BannerHero';
import DashboardElement from './component/DashboardElement'
import Ourclient from './component/Ourclient';
import Insights from './component/Insights';
import WhyBuildpiper from './component/WhyBuildpiper'
import Casestdy from './component/Casestdy'
import Communitee from './component/Communitee'
import BuildpiperFeature from './component/BuildpiperFeature'
import HappyClient from './HappyClient'
import HealthFood from './component/healthFood'
import Student from './component/Student'
import Calulator from './Calulator'
import Container from './component/Container'
import AppName from './component/AppName'
import AddTodo from './component/AddTodo'
import TodoItems from './component/TodoItems'

import ChildB from './component/ChildB'


import { useState, createContext, useContext } from 'react';
import ChildD from './component/ChildD';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';
import PostList from './component/PostList';
import CreatePost from './component/CreatePost';
import User from './component/login/User';
import Register from './pagecomponent/Register';
import RegisterUserList from './pagecomponent/RegisterUserList';
import TabComponent from './component/TabComponent';

export const Data = createContext("");


// const Data = createContext();

function App() {

  const [user, setUser] = useState("Jesse Hall");
  const aa = "manish";

  const default_post_list = [
    {
      id:'1',
      title:'Kevin Nurdin – DevOps & SRE Manager – Tiket.com',
      likes:'3',
      body:'The OpsTree team’s detailed explanation of each WAR pillar’s objectives led us to optimize infrastructure for improved cost, availability, and security.',
      tt:["dd", "e1", "2",]
 },
 {
  id:'2',
  title:'Anshu Sharma – CTO – Uolo',
  likes:'13',
  body:'OpsTree’s unwavering commitment, technical expertise, and collaborative spirit have been instrumental in our success in DevOps, NOC, and Infrastructure.',
  tt:["42","23",]
},

{
  id:'3',
  title:'Utsav Tiwary – Co-Founder & CTO',
  likes:'30',
  body:'Setting up our backend was a journey with challenges, but the OpsTree team scaled smoothly, cut costs cleverly, and their ongoing support was swift and indispensable.',
  tt:["dfgs"]
},
  ]

  const inisialdata = [

    {
      name: "Deepak Singh",
      duedate: '05/01/2024'
    },
    {
      name: "Ashu singh",
      duedate: '31/01/2024'
    },
    {
      name: "Sandeep singh",
      duedate: '31/01/2024'
    },
  ]

  const [todoitem, setTodoitem] = useState(inisialdata)
  // const UserContext = createContext();

  function handeraddnew(itemname, itemdata) {
    // console.log(`new item name is: ${itemname} date is ${itemdata}`)
    const newtodoitem = [...todoitem, { name: itemname, duedate: itemdata }]
    // console.log(newtodoitem)
    setTodoitem(newtodoitem)

  }
  const [selecttab, setSelecttab] = useState("Calulator")
  return (
    <>
      {/* <HappyClient   /> */}
     
      <ulist/>
      <div className='Appwrapper'>
        <div><Sidebar activeTab={selecttab} clickselectTab={setSelecttab} /></div>
        <div className='Appwrapper-right'>
          {/* <Header /> */}
          {selecttab === "Home" ? <PostList postlistdata={default_post_list} /> : 
          selecttab === "Calulator" ? <Calulator additem={inisialdata} /> : 
          selecttab === "User" ? <User /> : 
          selecttab === "Register" ? <Register/> :
          selecttab === "UserList" ? <RegisterUserList/> :
          selecttab === "Addtabdata" ? <TabComponent/>:
          <CreatePost />}
          <Footer />
        </div>
      </div>



      {/* <center className='pt-4'>
        <AppName />
        <AddTodo newitem={handeraddnew} />
        <TodoItems todo={todoitem} />
      </center> */}


      {/* <Student/>
      <Container />
      
      <BannerHero />
      <DashboardElement />
      <Ourclient />
      <Insights />
      <WhyBuildpiper />
      <Casestdy />
      <Communitee />
      <BuildpiperFeature />
      <HappyClient />
      <HealthFood /> */}

    </>
  );
}

export default App;