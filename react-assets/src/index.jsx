import { renderReact } from 'hypernova-react';
import BasicExample from './BasicExample';

// All instances of 'Sheep' on the page will be hydrated by Hypernova with this
renderReact('BasicExample', BasicExample);
