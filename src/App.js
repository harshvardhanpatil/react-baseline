// import './App.css';
import Loading from './components/Loading';
import Panel from './components/Panel'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='app-container'>
      <div className='container overflow-hidden mt-2'>
        <div className='row'>
          <div className='col-12 col-sm-4'>
            <Panel header={'Panel Head'}>
              <Loading />
            </Panel>
          </div>
          <div className='col-12 col-sm-4'>
            <Panel header={'Panel Head'}>
              <Loading />
            </Panel>
          </div>
          <div className='col-12 col-sm-4'>
            <Panel header={'Panel Head'}>
              <Loading />
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
