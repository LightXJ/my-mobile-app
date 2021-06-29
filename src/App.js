import { Pagination, Icon } from 'antd-mobile';
import { Button } from 'zarm';
import './App.scss';

const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};


const App = () => (
  <div className="pagination-container home-page" >
    <div className="box">我是盒子</div>
    <p className="describe">我是说明我是说明我是说明我是说明我是说明我是说明我是说明我是说明</p>

    <div className="title">以下是ant-mobile组件</div>
    <Pagination total={5} current={1} locale={locale} />

    <Pagination total={5}
      className="custom-pagination-with-icon"
      current={1}
      locale={{
        prevText: (<span className="arrow-align"><Icon type="left" />上一步</span>),
        nextText: (<span className="arrow-align">下一步<Icon type="right" /></span>),
      }}
    />


    <Pagination simple total={5} current={1} locale={locale} />


    <Pagination mode="number" total={5} current={3} />


    <Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '16px' }} />

    <div className="title">以下是Zarm组件</div>
    <Button>default</Button>
    <Button theme="primary">primary</Button>
  </div>
);


export default App;