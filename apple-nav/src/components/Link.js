import AppLink from './StyledComponents/AppLink';

export default function Link(props) {

  return (
    <AppLink to={props.link.id === '/'? '/' : `/${props.link.id}`} >
      {props.link.url? <img alt={props.link.label} src={props.link.url} /> : null}
      <span>{props.link.label}</span>
    </AppLink>
  );

}