import React from "react";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
  const linksFirst = [
    {name: 'হোম', link: '/'},
    {name: 'সদস্য হোন', link: '/apply'},
    {name: 'প্রবেশ করুন', link: '/enter'},
    {name: 'আবেদন করুন', link: '/help'},
    {name: 'প্রশ্ন করুন', link: '/query'}
  ];

  const linksSecond = [
    {name: 'ড্যাসবোর্ড', link: '/'},
    {name: 'প্রোফাইল', link: '/profile'},
    {name: 'সদস্যবৃন্দ', link: '/members'},
    {name: 'দান', link: '/donate'},
    {name: 'আবেদন', link: '/help'},
    {name: 'প্রশ্ন', link: '/query'}
  ];

  let drawerClass = "side__drawer";
  if (props.show) {
    drawerClass = "side__drawer open";
  }

  return (
    <nav className={drawerClass}>
      <Link className="navbar-brand big-navbar-brand" to="/">
        স্বদিচ্ছা
      </Link>
      <ul>
        { !props.isLogedIn
          ? linksFirst.map(el => (<li key={el.name}>
            <Link to={el.link} onClick={props.clear}>
              {el.name}
            </Link>
          </li>))
          : linksSecond.map(el => (<li key={el.name}>
            <Link to={el.link} onClick={props.clear}>
              {el.name}
            </Link>
          </li>))
        }
      </ul>
    </nav>
  );
};

export default SideDrawer;
