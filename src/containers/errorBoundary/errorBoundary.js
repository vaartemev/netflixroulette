import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log('error: ', error);
    console.log('info: ', info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>Что-то пошло не так.</h1>;
    }

    return children;
  }
}
