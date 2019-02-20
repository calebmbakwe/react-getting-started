import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import AddChikForm from './Chiks';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
	{
		image: "https://scontent-los2-1.xx.fbcdn.net/v/t1.0-9/1469797_3597388709058_1824705317_n.jpg?_nc_cat=104&_nc_pt=1&_nc_ht=scontent-los2-1.xx&oh=5711f481b502369cfd216c5f2a057ee6&oe=5D28A2B8",
		options: [
			"Sikiru Babalola",
			"Agboola Olaide",
			"Halimat Mercy",
			"Seun Owonikoko"
		],
		answer: "Agboola Olaide"
	},
	{
		image: "https://scontent-los2-1.xx.fbcdn.net/v/t31.0-8/17017162_1553165194710971_1582688162007551794_o.jpg?_nc_cat=100&_nc_pt=1&_nc_ht=scontent-los2-1.xx&oh=31ca973abf9d135a4c25af432f1f51af&oe=5CDBC80F",
		options: [
			"Sikiru Babalola",
			"Agboola Olaide",
			"Moyin Adeyemi",
			"Seun Owonikoko"
		],
		answer: "Moyin Adeyemi"
	},
	{
		image: "https://scontent-los2-1.xx.fbcdn.net/v/t1.0-9/42211189_2051152154936025_4104201242601848832_n.jpg?_nc_cat=111&_nc_pt=1&_nc_ht=scontent-los2-1.xx&oh=30a668463670403b976c6efeef908ebb&oe=5D213483",
		options: [
			"Mercy Oseni",
			"Agboola Olaide",
			"Moyin Adeyemi",
			"Seun Owonikoko"
		],
		answer: "Mercy Oseni"
	},
	{
		image: "https://scontent-los2-1.xx.fbcdn.net/v/t1.0-9/14993296_1311721742195856_6265313143683704263_n.jpg?_nc_cat=104&_nc_pt=1&_nc_ht=scontent-los2-1.xx&oh=7461f853e2d701b00e8b2a44593c9111&oe=5CEA727C",
		options: [
			"Mercy Oseni",
			"Agboola Olaide",
			"Moyin Adeyemi",
			"Seun Owonikoko"
		],
		answer: "Seun Owonikoko"
	}
];

const addChik = (chik) => {
    data.push(chik);
}

const Home = () => {
    return (
        <App data={data} />
    );
}

const Form = () => {
    return (
        <AddChikForm addChik={addChik} />
    );
}

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={Form} />
        </React.Fragment>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
