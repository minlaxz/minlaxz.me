```
Redirect to minlaxz.vercel.app .
```

### three parts:

1. [minlaxz.github.io](minlaxz.github.io) - Frontend using NextJS - submodule
2. [super-drf](super-drf) - Backend using Django REST Framework - submodule
3. [This/*](.) - Containerizing the deploying to AWS

---
### For FE --
- nextjs
- [redux/toolkit](https://redux-toolkit.js.org/) (state management)
- [tailwindcss](https://tailwindcss.com/)
- redux-thunk (async)
- deployed [here](https://minlaxz.vercel.app/)

---
### For BE --
- django
- django-rest-framework (DRF)
- django-cors-headers (CORS)
- django-allauth (auth)
- django-fsm (finite state machine)

---
### For Deployment --
- ~~Heroku~~ - [here](https://superduperdrf.herokuapp.com/api/) -- this is going to be deprecated
- Flyio - [here](https://super-duper-laxz-69.fly.dev/api/)

- Cloud - [See here](docker-compose.staging.yml)
    + web - (Django container) 
    + db - (PostgreSQL container)
    + nginx-proxy - (NGINX reverse ssl container)

---
