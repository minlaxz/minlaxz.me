```
Redirect to minlaxz.vercel.app .
```

-- three parts:
--
1. [minlaxz.github.io](minlaxz.github.io) - Frontend using NextJS
2. [super-drf](super-drf) - Backend using Django REST Framework
3. [This/*](.) - Containerizing the deploying to AWS


### Frontend --
- next
- reduxjs/toolkit (state management)
- tailwindcss
- redux-thunk (async)
- [available](https://minlaxz.vercel.app/)

### Backend --
- django
- django-rest-framework (DRF)
- django-cors-headers (CORS)
- django-allauth (auth)
- django-fsm (state machine)

### Backend Deployments --
- Heroku - [available](https://superduperdrf.herokuapp.com/api/)

- AWS - [See compose file](./docker-compose.prod.yml)
    + web - (Django container) 
    + db - (PostgreSQL container)
    + nginx-proxy - (NGINX container)
    + nginx-proxy-letsencrypt - (NGINX SSL container)