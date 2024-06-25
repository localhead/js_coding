/**
 * Данный фрагмент проекта на React, разработчик который его писал уволен по статье.
 *
 * Нужно поправить код таким образом, чтобы он был:
 * - более читаем;
 * - проще подходил к тестированию;
 * - работал;
 * - чтобы это ускоряло разработку;
 *
 * Иными словами нужно отрефакторить код, сделав лучше чем было.
 * Цель задания - понять, что ты понимаешь под словом "лучше"
 *
 * P.S. Отсутствует реализация файла store.js, реализовывать его не нужно,
 * считаю что файл есть и рефакторить его не требуется.
 */

// dataService.js
import { ClientType as _ClientType } from './root';

export function getData(state) {
  const response = fetch('/api/companies', {
    method: 'POST',
    body: JSON.stringify({
      id: state.client.id,
      type: _ClientType.company,
    }),
  });

  return response;
}

export const ClientType = _ClientType;

// component.jsx
import * as React from 'react';
import { ClientType, getData } from './dataService';

function Component(props) {
  const { store } = props;
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await getData(store.getState());
      const data = await response.json();
      setItems(data.items);
    })();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div className={`item_type_${item.type}`}>
          {item.type === ClientType.person ? (
            <span>{item.id}: {item.name}</span>
          ) : (
            <span>Компания {item.id}</span>
          )}
          <button onClick={() => { console.log(item.id); }}>choose</button>
        </div>
      ))}
    </div>
  );
}

export default Component;


// root.jsx
import * as React from 'react';
import Component from './component';
import store from './store';

export const ClientType = {
  company: 'company',
  person: 'person',
};

function Root() {
  return (
    <Component store={store} />
  );
}

export default Root;

// app.jsx
import * as React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

ReactDOM.render(<Root />, document.querySelector('#app'));


