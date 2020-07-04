import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import './Todo.css';

class Todo extends React.PureComponent<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			tasks: [
				{
					id: 1,
					title: 'Task 1',
					completed: 0,
					created_at: '2020-07-04T07:17:47.000Z',
					updated_at: '2020-07-04T07:17:47.000Z'
				},
				{
					id: 2,
					title: 'Task 2',
					completed: 0,
					created_at: '2020-07-04T07:17:47.000Z',
					updated_at: '2020-07-04T07:17:47.000Z'
				},
				{
					id: 3,
					title: 'Task 3',
					completed: 0,
					created_at: '2020-07-04T07:17:47.000Z',
					updated_at: '2020-07-04T07:17:47.000Z'
				}
			]
		}
	}

	handleAddNewTask = (event: any) => {
		if (event.keyCode === 13) {
			this.setState({
				tasks: [
					...this.state.tasks,
					{
						id: Math.floor(Math.random() * 100),
						title: event.target.value,
                        completed: false
					}
				]
			})
		}
	}

	handleDeleteTask = (id: number) => {
		const tasks = [...this.state.tasks];
		const item = tasks.find(item => item.id === id);
		const index = tasks.indexOf(item);
		tasks.splice(index, 1);
		
		this.setState({
			tasks
		});
	}

	toggleCompleteTask = (id: number) => {
		const tasks = [...this.state.tasks];
		const newTasks: any[] = [];

		tasks.forEach(element => {
		if (id === element.id) {
			newTasks.push({
				...element,
				completed: !element.completed
			});
		} else {
			newTasks.push(element);
		}
	   })
		this.setState({
			tasks: newTasks
		})
	}

	generateTaskList(task: any) {
		const { id, title, completed } = task;

		return (
			<Paper className="paper" key={id}>
				<Grid container spacing={3}>
					<Grid item xs={2}>
						<Checkbox
							name="checkedB"
							color="primary"
							onChange={() => this.toggleCompleteTask(id)}
							checked={!!completed}
						/>
					</Grid>
					<Grid item xs={8}>
						<Typography noWrap>{title}</Typography>
					</Grid>
					<Grid item xs={2}>
						<IconButton aria-label="delete" onClick={() => this.handleDeleteTask(id)} >
							<DeleteIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Paper>
		)
	}

	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Container fixed style={{ backgroundColor: '#cfe8fc', height: '100vh', paddingTop: 20 }}>
					<TextField id="standard-basic" label="Please add new task" onKeyDown={this.handleAddNewTask} />
					
					{ !!this.state.tasks.length && this.state.tasks.map(this.generateTaskList, this) }

				</Container>
			</React.Fragment>
		);
	}
}

export default Todo;
