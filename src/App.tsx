import { createClient } from '@supabase/supabase-js';
import './App.css';

function App() {
	const supabase = createClient(
		import.meta.env.VITE_SUPABASE_URL!,
		import.meta.env.VITE_SUPABASE_KEY!
	);
	console.log(supabase);

	return <></>;
}

export default App;
