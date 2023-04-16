
    const heading1 = React.createElement('h1', {
        id: 'title',
        className: 'test1',
    }, 'Welcome to React!');
    const heading2 = React.createElement('h2', {
        id: 'title',
        className: 'test2'
    }, 'Namasthe React!');
    const container = React.createElement('div', {
        id: 'container',
    }, [heading1, heading2])
    const root = ReactDOM.createRoot(document.getElementById('root'));

    // passing the react element inside root
    root.render(container);
    // what is the difference between async and differ
