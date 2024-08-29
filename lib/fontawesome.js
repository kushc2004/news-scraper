// lib/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically since it's handled by the application

library.add(faSearch);
