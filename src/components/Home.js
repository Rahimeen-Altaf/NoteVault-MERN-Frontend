import Notes from './Notes';

export default function Home(props) {
  document.title = 'NoteVault | Your Digital Notes';

  const { showAlert } = props;
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  )
}