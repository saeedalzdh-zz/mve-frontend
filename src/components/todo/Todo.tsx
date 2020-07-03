import React, { MouseEvent } from 'react';
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

const message = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque laborum reprehenderit, delectus consequatur incidunt aperiam repellat ex nisi fuga modi. Repudiandae maiores blanditiis dolorem error illum inventore sunt facere atque!';

class Todo extends React.PureComponent<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			tasks: ['task1', 'task2']
		}

		this.handleAddNewTask = this.handleAddNewTask.bind(this);
	}

	handleAddNewTask(event: any) {
		if (event.keyCode === 13) {
			this.setState({
				tasks: [
					...this.state.tasks,
					event.target.value
				]
			})
		}
	}

	handleDeleteTask(index: number) {
		const tasks = [...this.state.tasks];
		tasks.splice(index, 1);
		
		this.setState({
			tasks
		});
	}

	generateTaskList(task: string, key: number) {
		return (
			<Paper className="paper" key={key}>
				<Grid container spacing={3}>
					<Grid item xs={2}>
						<Checkbox
							name="checkedB"
							color="primary"
						/>
					</Grid>
					<Grid item xs={8}>
						<Typography noWrap>{task}</Typography>
					</Grid>
					<Grid item xs={2}>
						<IconButton aria-label="delete" onClick={this.handleDeleteTask.bind(this, key)} >
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
