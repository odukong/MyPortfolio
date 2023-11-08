const Login = (props) => {
  const { id, pwd, changeId, changePwd } = props;
  return (
    <div style={{padding:"2rem",background:"black",color:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <h3 align="center" className="p__content" style={{fontSize:"25px"}}>로그인</h3>
      <table align="center" width="30%">
        <tr>
          <td className="p__content" style={{fontSize:"18px"}}>아이디</td>
          <td>
            <input type="text" size="16" value={id} onChange={changeId} />
          </td>
        </tr>
        <tr>
          <td className="p__content" style={{fontSize:"18px"}}>비밀번호</td>
          <td>
            <input type="password" size="16" value={pwd} onChange={changePwd} />
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Login;
    