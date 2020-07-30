import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";

// import DashboardIcon from "@material-ui/icons/Dashboard";
// import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
// import FastfoodIcon from "@material-ui/icons/Fastfood";
// import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
// import LocalBarIcon from "@material-ui/icons/LocalBar";
// import StyleIcon from "@material-ui/icons/Style";
// import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import "./styles/nav.css";
import { NavLink } from "react-router-dom";
import {
  DASHBOARD_BASE_URL,
  ORDER_BASE_URL,
  CUSTOMER_BASE_URL,
  PRODUCT_BASE_URL,
  PIZZA_BASE_URL,
} from "../routes/URLMap";

export const mainListItems = (
  <div>
    <NavLink to={DASHBOARD_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <img
            className="icon"
            alt="icon"
            src="data:image/png;base64,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"
          />
        </ListItemIcon>
        Dashboard
      </ListItem>
    </NavLink>

    <ListSubheader inset>Products</ListSubheader>
    <NavLink to={PRODUCT_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <img
            className="icon"
            alt="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEq0lEQVR4nO2aXYhVVRTHfzNOWN3umJB9zGiFQYqOSdiXPRQ0CJGUgkEFUkSU0hdBb0GQ4VNEPYVS9NTHQySGBGWoaEjFKPbBQI3gNIQzU9HM5OSko1PTw9qns+5x73P3ufvM5c6d84fN3Xevtdfaa521vzcUKFCgQIECBQoUKFCgQIECcw4tKbR24B7gojq1JRTngH3ARF4CDwLTsywdBObl5YDxBjColrQti5FpXWAcKJv8bmAqi+AZxL3E7foc+Au4HFhnyqaAW4DvQxXpCChX4a0n+ojbdaMpawEOqfKvSf+4XphNDsDkzyjaxlBFvylhN4UKywntwChxuxYn6K8o2ncERsEnStgEcEKlw8AKw/co0KtofcB2Q1sI7Mmx7phq04DFwDIwongeDLCf1cDfuEfbnYZv0EG/GnhqBupG6SFHu19WPD8QGAWrgR6L8vPAJsPzroV+BGgDuoBTOdaNvrzLeJAZQUfKXWkG+npnEZUD4Skk1CIZi4lXjP8CJ4mnzcuAK3OqOwkMIYal4XXgRZN/D+lqcwrLEGdOI914YajArcAxYEuifBtwFFgfqsBgJTJIfghcnKBdC+xHBkYfgw4Td4NnQhs2YQSdVmWdSsG3oQoM3lEyNyRoryraVg9Zjyv+b1xMrZ4Nu9T8llRZyUIPhZZTStAuUfl2D1m7kB0iwK3ANTYmXwc0Av5Q+WUe/OPAAZNvBe63Mc0mB/So/CZgiUedPSr/QIhyPQ9HWKLKRgnfL7QCXymZybV8G3Bc0XuBO0ifyjuJZ4MzyLRaAd91gDa8Rf0OIKMzyOJjzFOeDSXgKpOfMnKHEzzrgM+oPPT4E/kALlyn+O8z9TPDFgEAjyRoeaXXUtqyGThbo9ztFnlecDkAZA0wUGODkmkMeInqY9Ny4H3sS+W0dCgpKKQLJOV0APM95dnwD7I5ynLyNA/pNslF0wvAcxb+s8heYTJr49IioBGxAXcU3KkZZ9M0mAU9KbQ1+k+zOmAY2TXa0KX/NKsDQDZvNqzSf5rZAT85yrtQA3kzO+BHR3mZePHW1A5wRQDADVGmmR1wPIXWGWWa2QEjyMLHhv93ks3sgGku3ExFmBMRAIUD+N1RviDKtAUqaAW6kYOJK5DNzBfIvVw9oPUvQlZ/e4kPaV2vRTKfYdo2Q2upvKnVaR9qrp0hpOnfD1xP5SmzTr1ZlSUd0I2cuKbtvYdMI2YCPvoHkTNBG60/ElTLeUA/csQcHVOfRq6fTgA3Aw8TH0FVO66qFS79a5B7w2pj2xBqIPTBFHZP/gosTfDeTfWvk1ey6e9GLmDT6v2SxXiAjxyCnnDwv1UnB7j076hS782I0bcLtCCrpzbgS+LwWYF907EZCUuQh0zBd3MKR4nvBn307wWeVrRJZHwA/KdBHTYniR3Q4WhAh8r3owadHDBM7AAf/YM562cncSh9aqGXkAGpWpjWig8y6n8yZ/2sIr5tmQY+Rl6SlJEB8IiijXDhJWco1lLZn9P0j5LhbcAO5GWYrb/ejoRePQa2PNNjvsa3q0p9FvobDWBMlnQeeN7X+AhvI1fKz1potxG/zWnUdA742dixPKvxBeYq/gNr3fBZyomLXgAAAABJRU5ErkJggg=="
          />
        </ListItemIcon>
        All Products
      </ListItem>
    </NavLink>

    <NavLink to={PIZZA_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <img
            className="icon"
            alt="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEZ0lEQVR4nO2YXahVRRSAv6umgmaY91Ya5YhSRNB9MKFItBIig16qBzE1utJD9mQ+iAiCUhAWvuRLJoaQaUhUlHGjsPyJEiIEuRSRP/2oiD9YeK/aSbcPc4a75uy19z5n/5yTNR8MZ5+1Zs1ea37WzB4IBAKBQCAQCAQCgf8hXZ12IIWxwIvAQ8AI4GPgXeBKJ51qFwb4EYgayg5sZ/ynuRM4TDx4V17tnGvVkxV8BFwFFnXKwSoxwFGGA70AvI/eCReBBzriZUU0jvwg8Ah2vX+C3gm/AxM74WzZGPyRj4DHhf4m4Cf0TtjaTkerwBAPPgI+wM/2dwN/KvUi4On2uVsuBj/4IWyCc//XN9TvQ++A08AtbfG4RAzxhDcHWIsf3NIGu6R88FY7nC4LQ3zav1nXdQHb8WfFvcL2NuAM8Q74B+it3vXiGPQ1v1HUGQscELqDwBihf06xj4Dd1bpeHIMefIQ980umA38J/QahGwF8n9DOk5V5X5C0E94g0K3YPC/qXAFmCd3chLYOVON+MQzJIx8By1JsPxT19uF/vUqdLHNK9b4ghuTga8CKJuyHhM1CoevF3zZd+bQs54tiiG91XwC7gFeAaQl2PfhJb51o4xhwg9D1E++Aq8A95YSQH4O+z2fxLHZLOwJMqsvGAcdFW0tE/Xnos+u1ogEUwZAveID3hJ083KwQ8gH8XPAD8Q74jQ5dnBjyBw8wW9j+IeQ3AueETm53L6HPgkfzBFAEQ77g+4ATwGZgFXoHgM0bTveRkPcAfxPvgC35wsiHIf/I/4w+gpuUd7isf5nhHAH6N8JJ2nTpayg27dcQd/5X/AAde0QdeX5YoLQRAfe14EcuDMWCdywCPsNuk+uw01rjBfGur4V8Inb3aOyArHNGIQzlBN8K3dhjsVsG44ROfkC50l+VI0l3eO1Abnvy6kwmSVfOU0EeMOQf+S5gPjZDfwN8h735XYx/wktjvXj360L+MHoemNpku01hSA5+AulB3A7sT3AyAn4B7m/Ch/nCZp+QT0D/NijtE9mgB98LfMvwuuwHZjTY9mBPZ0nBD4nfWaQzWdida9AdUdpe3UqQSRj04Lvrz40vPYU/G3YpdVzZil0abmofxZ780jgr7KcIufaJvC2toWbOywb4qv4LNuE9AewFRjMcaK1eqMtd2731+gCfY6+8Je7m57x43+IMnwbEs7wzPKTUnZzRVird+NNKS3hzsYeZqVjn1+CvZZedB4FRddkx/FE6jL9+92b49Y6o2yfkS4nPgIGYdQtsIj34Ztgh2liOveqqCdlu7CjuFLITGW3KnWClkMsE6cqZtIZGpSnx99mnyB4ZjZHieYOi34MdpS+BZxQbjdPiWd4nah13M3aZ1hRdZgdIbgVmtlDfcTlDvxI7Ax4TsrMZ7xovnu8SdbXvhxp2eeXibZKz9/VSduYNHuwWI7e/662cBO5IC7CZc3IP8DLwIP7U+zdzCftx9Aa2EwKBQCAQCAQCgUAgILkGo+RrsX6wkBcAAAAASUVORK5CYII="
          />
        </ListItemIcon>
        Pizzas
      </ListItem>
    </NavLink>

    <NavLink to={PRODUCT_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <img
            className="icon"
            alt="icon"
            src="https://img.icons8.com/pastel-glyph/64/000000/orange-soda--v2.png"
          />
        </ListItemIcon>
        Drinks
      </ListItem>
    </NavLink>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Management</ListSubheader>
    <NavLink to={ORDER_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <img
            className="icon"
            alt="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACfElEQVR4nO2bz0sVURTHP5ZQIBkYGOmignBVy8qoTakEJuX/IOLCfyVq06KiVbRoK1KLsh8LQXSprlpoLYyilaJQKO+1uPN49wnmO2/OnfMmzwcu784w95zvfN/cmblzZ8BxHOcI05Gj7VlgBOjLGScPVWADmAN+FpX0NPAC2MsEtEPZBZ4D3Qn3G4AzwKrhjh5WVoAeyQ5JD903wGi0vAAsAb+FcbQ4CVwHBqN1s8D9FMluUXe6AkykSNIikwRNNX03UiR5FCV4mSJBTl5R1/ew2UbHBAkGovpbQbuiiDUNHLjVPiQGdEX1H4J2RfE9qp9qtpHEgP8SN8BagDWdyvHuAFeVY8YsAZ80A2oacBF4BxxXjLmfPcIZfl0rYBm7QFUzmOYRsA4MZ0W7a0H49+eAr5pBtYV+zkppKGMXUMUNsBZgjaYBJ4CPNA5LNUsF+JDlUUPTgCvAbdI9H+wg3Ghd1gyqacAK4QhQvU5HVAlHwKpmUM3L4B9gSDFeIfhJ0FqANUfeAMvhcAWYAb4oaxBhPRyeAi4pahDjXUAxlnQ4vAO8VszfEj4cthZgjRtgLcAaN8BagDVugLUAa9wAawHWuAHWAg7hAjCd/Sah3Q14DzzJfpPQ7gbUqKQKnGIWV5O7wAPCk6MktLsBa8DjlAnK0gWSITFgO6qf0xaiQH9U32q2kcSA+OntPUG7oog1JXnSfJPGmdrJFElaZIrGmeTBf29eRzqTOwuMRcuLwDzwSxhHi17CW+zXonUzwHiqhD2EWWDrDyMOKssIP5hohW7gGeEzFesdrpVd4CmCl6Rr5HmZoZcwB3Ce8B2RBZvAN8KtslU3dBzHKS9/ATINAz8KAr9rAAAAAElFTkSuQmCC"
          />
        </ListItemIcon>
        Recent Orders
      </ListItem>
    </NavLink>

    <NavLink to={CUSTOMER_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <img
            className="icon"
            alt="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAF10lEQVR4nO2aa2wUVRSAv61rW2yJ4KOlPmK1giQWrJSgiUqwKhiNoiRGKMoPH5EEjVER4w9jfIAYsTzEyA/jW1EUTDAaI4nRGKOJpUJsgsWoIFtesSJtEQVs/XFm2DN3Z2bv7KOb2PmSTWZ3zuO+7zn3LsTExMTExMTExMTExAxDEiXyOQkYD9Q4v+0HtgHfA4MlKNOQMAZYAXQjlfT7dAPLgdoSlbEoJIBFQD/BFTc/fcBChmCEFttBJfAqMNv4fS/wBbDbKUMdMA0ZJZq1wB3A38UsZLFIIBXQPdsOTAfKfOTLgBlAh6HzDqVZq6xoBG4B7gFOMd4twluRNuAEC5tJZK3Qug8ZMqcB84FZwNgcy54zFU6BuvAWcqOSGYN3zrfl4Ec3Qh/ehfFzw/dWpEGSOfiJxGRgO/4L1yYlpwvfjl3PmyTxTgfdiN8GlGELcGEOvqy4GukJ7fAg8BGwBDjbkUvg3eqm5+HzWmUnRXotaACeBT4hc3f5A7g8D5++jAX+NJwsAEb4yE5WcrvxX/BsKUN2DNfeJB+ZamRK9iq534Fz8vCbwTfK+M9IDwTRqmTXFsD3e8qeuZ1qGpFR4sp+aWPcpnduAC51nvuB65FGCKJOPXfbFCILKfV8RohcJzAT+Mf5PhXZVkOxaYA71fNzwI8WOqViM/CS+n5XvgbLSS98/2IXo8+hNFPA5Xy8i/SJ+Tg/Txn7wVKnWensIf9FcJ+yd7Gl3m9Kpz6bgzBq1PMeS+cdyOoPEhDluw26ZUgh+7wNeu0x8wsP2RrgkHqusnQ+CKxT35eQW4SWdHRd1mF/VlCtnvtz8H2cU/HurbYRXS3eoGlFDr5XKf1evKMxjBFIx7m6o3Pw7aFTGbsmgt5CpTcIrMRuJCSBFwzdByL4naX0tkbQC+RJZfBr7Be1BJLK6op0IPM6KB2+DpnnWuct7NPhJFJpV/dxS71QTke2E9fo0xF0K8lshEEkvH0XSXDakK1un4/c244NW1Yq3QPIFC4ID5I5nMMKVg5MRHo1gcTqZiIV9ulFhn3CsdFI+PSpAl42bCyIXMsQ/IbzTuBhp3BVSGtPARaT7s3XlY1apLdTBFd8F/A83gVvvfOuGxnSzcjCVg00AY+SedD6SpSK2VIOrAbujqDzEzDOx2cTcizu7tF7kRDbnf+aFHBmBJ+rkBF3LIJOJFqBHWQfxjuxSEYsmIkEVtn8dQE3FcCfFZXArUisvw2Z338BvyIByxzk6KxQjABuR6bDDuAwcj7RiQz3G8kz5h+2lOK4uQI4C1nIRjm/HUB6NEU6n//fUIlEZ2uQfP0IwfP4CHKIuga4mWgxwJBxAVlSTIcm4A28QVTUz0HgNeAiC3/1TtmKwmjgEdJ5wTHgygDZCcCHwAD+lRpAdoh25Ch9E/Ad8ItjN0hng2Pbjxal2+mUdVSAbCSqkdDXL4q715AtR/KGoz6yXc67FuDkLP6mAo8hBzCmnaOOnXJD7z4f2T7gKezT+Axm4B+19SMR3kgl20BmEjMAfIAck+fKRCQZMkfGFrwn0yOR6eZ3A50i4qFMGbCUzCG8GZhL5l3AFDITma+cwheK8cBnho/9wCWG3EnAPLwZodsZS7HIZCtIx966BWfjv2W24G31w0gSk885YBAJ5P5P+zuE3Fj5yc7De6kyiIxIc/ocJ4ksXlphPZm3vi4T8N4W9QCXRatTTjQj55N6pwjaJWqAj/HWaQMBmeWLhuBiggOlOrwnr93IMB0q6pHLGe0/KGEqI/O6fbUpdJsh8ESWAmxUsn3439kVm3HIOaVbjk8Jj2yX4a1jq/uiFrnsdF+8mcXxXCU7gCQipeIKvNtuWKqeAN5Xsj04Fz16eGxHVtIgyvDOP+uDhyLyDOnyHCBkkUPiDD11loOc0rjRXUsWZwnSscEuCnDkXAAqSEeoPYQ3AMBVpOOKZSD7+nyCQ1uTBuB+4NwcClss6pDtNyhUNpmG1Nnv/w0xMTExMTExMcOD/wBXZkVc40G+mAAAAABJRU5ErkJggg=="
          />
        </ListItemIcon>
        Customers
      </ListItem>
    </NavLink>
  </div>
);
