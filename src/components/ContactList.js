export default function UserList({ contacts }) {
    return (
      <div>
        <table border="1" cellspacing="0" cellpadding="" style={{width: '100%',}}>
          <thead>
            <tr>
              <th>FullName</th>
              <th>ClassName</th>
            </tr>
          </thead>
        <tbody>
          {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{ contact.name }</td>
                <td>{ contact.className }</td>
              </tr>
          ))}
        </tbody>
        </table >
      </div>
    );
}