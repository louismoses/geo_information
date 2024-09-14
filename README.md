## Installation

- git clone https://github.com/louismoses/geo_information.git

### Frontend ReactJS

- cd geo-info-app
- copy .env.example to .env
- pnpm install
- pnpm run dev

### Backend Laravel

- cd laravel_server
- copy .env.example to .env
- composer install
- php artisan migrate --seed
- php artisan serve
