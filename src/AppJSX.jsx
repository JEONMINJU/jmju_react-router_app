// import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'minju';
  const list = ['1', '2', '3'];
  return (
    <>
    <h1 className='orange'>{`Hello ${name}`}</h1>
    <h2>hello</h2>
    <p>{name}</p>
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
    </>
  );
}

export default AppJSX;
