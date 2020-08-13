import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import "./styles/nav.css";
import { NavLink } from "react-router-dom";
import {
  DASHBOARD_BASE_URL,
  ORDER_BASE_URL,
  // CUSTOMER_BASE_URL,
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

    <NavLink to={ORDER_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          {/* <img
            className="icon"
            alt="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACdUlEQVR4nO2aP2/UMBiHn5yOnaEs3VqgEx+AlkpsDB1YGOj1+mfka4QPUalILAiKEOrE0ErMlPIBmJCuY5curFTijiEO51pJL7m+zuu7+JGiJPYr++ffOXbsHEQikUiLSZz7VXPcUdDSBFfAGfDDzbgLnACjlhzHps3/aVPjbRNIyLr8d2PEEDgELphPFoE+0DH3q11gzQr4AOw1rUqBHXNe6zgZ7qA4j1xrYxc4te77JuAr2aMwNOkdk7fYgEAJLijW/wzYsuLyR79wENyxAncL8kM/Juk/zp0B6BkTbEbW9TKzx33reuTknWB6Qtck/AY2gMdks8Il8LGk4FPgm5hMWdaBJwXph2Qm3KPkRWgSKeOuk04tzz8pNXW6s0DriAZoC9AmGqAtQJtogLYAbaIBwuWtAOf4e78fAA8lBUsb8BxYEi7TZtnUIYa0AV/IfiVfDEwdYnQnh9TiF/BAuEyvxEFQW4A2rTdAegzwvXfo7vXdGmkDtoF3wmUW8V6qIOlHwN1784FoHdI9IN97eyRcbs5Pyvcqp0LagCHZ16WZofWzQDRAW4A2oRvgLq+DXw5L4y6vg18OS+Mur4NfDkvjfXkdeg/wTjRAW4A20YCKcVfW9R8fQrSoasAR2RQ0MNdzQ9VpcOZ2e6siMQYkZNtgPW7+n6FWnFcSYJ/xu/pbik1tKi610tKpWlQDV0SZ6CbjXuPJALe7JcBBgYj8OFCKu6xrQNVBsMd4q+upOb+y8t84aXZek3ELrnAp+oT3a0+KSyUNKKskFxFiXHqbBhfhVuKKCC3uRdVG1SEBXprzJ8o/UmjGbQJ/gc83tCMSiUQiAP8A8ZWyCeyazP4AAAAASUVORK5CYII="
          /> */}
        </ListItemIcon>
        Orders
      </ListItem>
    </NavLink>

    {/* <NavLink to={CUSTOMER_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <img
            className="icon"
            alt="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADyElEQVR4nO3aS2gdVRjA8V+aNCgkjUoptlixtkF8E6kLX3QhXUhtFVyIoigiSN2oBauLIggKrnyAGxfuVEQQhYqLqmgrGLQqviqlUrRVU8G3rdrUNHFx7uXO3NzbTHLPnCTN/OFwhztzvseZOef7zoOKioqKioqKioqFSVdifd1Y0vTfPxhNbEcyVuFB7MQIxjDRVMbxI17BdbNjZnyW4zn8Z7LDU5U3cGZ6k+NxJX4yfcez5RssS214DDbgqM6cr5cPsMnkMWPOciH+FMf5bDmMJ3BqOlemTxc+Ft/5bPkQZ6RyaLrcolzn6+VN6UN3Id6XpgEmcH0inwqzTOv4PtPyL+7Feuxtcf/VNG4VZ5N4zn+HKzKy727xzEhM4xdFkLEigowxPI8hDGf+v6rFs3MuP9hq5m98BE/jvBZy7z9BvWjEGFHPwes4u839I8Jk53chQ/wWXwtveg+Ot6n3Hta1uTcnI0FsLsPLOKjEL2C+cJ8F3gCnK6kBYkSBFIyVJTh2A6zGltrvgmSf8InujSy33zwZA/7SMLI/otyVGbntwuaMiN0FDmWuz4ooN7tEdiCi3OgNcDBzPRRRbjYl3hdRbvQG2JG5vimi3I2Z6+G2T80BBjX66lFxosFa+QFwMILMUtmhYexrHcrqxq6MvJ0dykvCkDBS143e2oGsx+VH/7UdW5eIpzQMHxemttPlMflP/9lo1iWgR74r1JeyVhWou7pF3bfRW4qlJTJgsiPH8AJuFdYPBoRItAY3C2PGsaY6u2rPzUt68KT8mFC0jAurRYuTW10CFwi7v0WdfwuXpzAs9dLSGtwoLHmvrJUu/IDvhS6zXfzJVEVFG1J3gV5cKoTD04SlLsKK8R/CivHnQiQ4abhYyOh2C8vjUw2Ao/hISIQumgV7o7AYd+ErnW+XfYk7hZAanTK6wG14FOe2uDchzOf34Bfh0yd0haXCGx9sY9d+PIKXItsbjRXCAafmN3hYyP42KpbRDQgbri/W6jbL2y4cwppTrMdv8ob+jIfQ14HcPjxck5WV/Suu7UBuVO6Qz9+PC7PBThxvph/PyKfUo7g9oo4ZsVnI2etGHcA1JepbJ2SM2fnCPSXqOyEb5A9CfiHuSnA7luPTjN4x3JBAb45LhG3vuhHD4u4DTMUS4dRYXf8RId9IQo/8kbj9ZufUxlKNnagJfCbR1HlbRunfWp/uSMX5wmnzuj3byla4SHC6rvCBshUWYIt8Vyh9x/uTmrJ3UigrQDfeFWzanUJhH67GKSmUFaRXCJEpB+KKioqTgP8BGCbuOlvSy88AAAAASUVORK5CYII="
          />
        </ListItemIcon>
        Customers
      </ListItem>
    </NavLink> */}

    <NavLink to={PRODUCT_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          {/* <img
            className="icon"
            alt="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAC6UlEQVR4nO2ZTWgTQRTHf7G1h6rUD/xAvCgopqQUFeuhpx6LBz2ICDmJ+IEHRdCLYvEsHkTw46Sn4k1UREUPolQqtVbwA6n4gYgHQRppEdHExMNM2Nk2m8wms7uxvh8MTF5m5//m7bzZtwkIgiAIgiAIgiAIgiD8Z6QS1F4O9Oj+CPA1QV9ipQ04B+SBkm55bWtL0K/YuIK38OntcoJ+xUIXUMRb8BNg2Phc1GNmLYfxFnvTsN8w7IfidGhOnGLAQqM/ZvSfG/1FMfkCQGucYvifOp3APqNfacysYAmQBa4COYIPwHLL6bFZfe0/SwYYBArUXnRQK+g5MlE5GcV2WwOcAbZR+Yz5DIwDn4CfekwHqjDqBpZWuKaEOiiPAu/du+yOPcAk/rv4B7gL7AZWWczRiXo8VtoRU8Be5147oB24ht/ZPHARSGO3cJNWVGUYlBrXgXkuHHfBAuAhfgeHUAvvBz5q28k65j5LcBCGUKmTKB3MrOROAS3AEfxV36U65k8B9wgOwlNgcSMLaIQUqpozT+ys/u4g3uKLqFRor1NnJTBBcBDuEH9BB8CxaY4c0PZdeIv/hXoaNMpxggNQAk440AhFD/DbcGBA29eiTuryjtjhSG8+8I3gABSAXkdaVjwyxG/h1RP3ie6unKf6LhgmpjK63xCdQuUowFbD/gz37xm9VA9ACdjuWLMio8zc+gCPDfumCHRbgO9UD8DLCHR9ZAyxSbzX27RhfxCh/m1q74JQwQ/7+DAPtUHUHQGVFmUuhJwzDCMWY3ZGqM9rvEj3GfYu4B3qDkX5G0OW2jvgQ1TiywyRH8DcqISqsIXaASgBK2wnDJMCG4z+KOplJ25s/ztI204YJgCrjf7bENe5JGc5br3thDaFw35gI2oHbNa2N8ArWxGHpLCrLsv+jQGnUaV5XfRhl3PN3Kq+i9RKgQkaiF4TUAS+VBtgkwLdwDon7sTPOPAiaScEQRAEQRAEQRAEQRCair9K30i+lfVyrAAAAABJRU5ErkJggg=="
          /> */}
        </ListItemIcon>
        All Food
      </ListItem>
    </NavLink>

    <NavLink to={PIZZA_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          {/* <img
            className="icon"
            alt="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEZ0lEQVR4nO2YXahVRRSAv6umgmaY91Ya5YhSRNB9MKFItBIig16qBzE1utJD9mQ+iAiCUhAWvuRLJoaQaUhUlHGjsPyJEiIEuRSRP/2oiD9YeK/aSbcPc4a75uy19z5n/5yTNR8MZ5+1Zs1ea37WzB4IBAKBQCAQCAQCgf8hXZ12IIWxwIvAQ8AI4GPgXeBKJ51qFwb4EYgayg5sZ/ynuRM4TDx4V17tnGvVkxV8BFwFFnXKwSoxwFGGA70AvI/eCReBBzriZUU0jvwg8Ah2vX+C3gm/AxM74WzZGPyRj4DHhf4m4Cf0TtjaTkerwBAPPgI+wM/2dwN/KvUi4On2uVsuBj/4IWyCc//XN9TvQ++A08AtbfG4RAzxhDcHWIsf3NIGu6R88FY7nC4LQ3zav1nXdQHb8WfFvcL2NuAM8Q74B+it3vXiGPQ1v1HUGQscELqDwBihf06xj4Dd1bpeHIMefIQ980umA38J/QahGwF8n9DOk5V5X5C0E94g0K3YPC/qXAFmCd3chLYOVON+MQzJIx8By1JsPxT19uF/vUqdLHNK9b4ghuTga8CKJuyHhM1CoevF3zZd+bQs54tiiG91XwC7gFeAaQl2PfhJb51o4xhwg9D1E++Aq8A95YSQH4O+z2fxLHZLOwJMqsvGAcdFW0tE/Xnos+u1ogEUwZAveID3hJ083KwQ8gH8XPAD8Q74jQ5dnBjyBw8wW9j+IeQ3AueETm53L6HPgkfzBFAEQ77g+4ATwGZgFXoHgM0bTveRkPcAfxPvgC35wsiHIf/I/4w+gpuUd7isf5nhHAH6N8JJ2nTpayg27dcQd/5X/AAde0QdeX5YoLQRAfe14EcuDMWCdywCPsNuk+uw01rjBfGur4V8Inb3aOyArHNGIQzlBN8K3dhjsVsG44ROfkC50l+VI0l3eO1Abnvy6kwmSVfOU0EeMOQf+S5gPjZDfwN8h735XYx/wktjvXj360L+MHoemNpku01hSA5+AulB3A7sT3AyAn4B7m/Ch/nCZp+QT0D/NijtE9mgB98LfMvwuuwHZjTY9mBPZ0nBD4nfWaQzWdida9AdUdpe3UqQSRj04Lvrz40vPYU/G3YpdVzZil0abmofxZ780jgr7KcIufaJvC2toWbOywb4qv4LNuE9AewFRjMcaK1eqMtd2731+gCfY6+8Je7m57x43+IMnwbEs7wzPKTUnZzRVird+NNKS3hzsYeZqVjn1+CvZZedB4FRddkx/FE6jL9+92b49Y6o2yfkS4nPgIGYdQtsIj34Ztgh2liOveqqCdlu7CjuFLITGW3KnWClkMsE6cqZtIZGpSnx99mnyB4ZjZHieYOi34MdpS+BZxQbjdPiWd4nah13M3aZ1hRdZgdIbgVmtlDfcTlDvxI7Ax4TsrMZ7xovnu8SdbXvhxp2eeXibZKz9/VSduYNHuwWI7e/662cBO5IC7CZc3IP8DLwIP7U+zdzCftx9Aa2EwKBQCAQCAQCgUAgILkGo+RrsX6wkBcAAAAASUVORK5CYII="
          /> */}
        </ListItemIcon>
        Pizzas
      </ListItem>
    </NavLink>

    <NavLink to={PRODUCT_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          {/* <img
            className="icon"
            alt="icon"
            src="https://img.icons8.com/pastel-glyph/64/000000/orange-soda--v2.png"
          /> */}
        </ListItemIcon>
        Drinks
      </ListItem>
    </NavLink>
  </div>
);

export const secondaryListItems = <div></div>;
