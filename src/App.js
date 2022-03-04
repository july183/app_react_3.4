import logo from './img/head/mj-04.svg';
import appStyle from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <nav>
      <header className={appStyle.container}>
        <h1>
          <a href='/' className=''>
            <img src={logo}></img>
          </a>
        </h1>
        <ul className= {appStyle.d1ul + ' navbar justify-content-evenly sticky top'}>
          <li className='about nav-item'>나의 소개</li>
          <li className='portofolio nav-item'>포토폴리오</li>
          <li className='Pre nav-item'>사전면접</li>
        </ul>
      </header>
    </nav>    
  );
}

export default App;
