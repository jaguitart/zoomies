from flask.cli import AppGroup
from .users import seed_users, undo_users
from .types import seed_types, undo_types
from .pet_posts import seed_pet_posts, undo_pet_posts
from .animal_ages import seed_animal_ages, undo_animal_ages
from .animal_breeds import seed_animal_breeds, undo_animal_breeds
from .animal_colors import seed_animal_colors, undo_animal_colors
from .animal_sexs import seed_animal_sexs, undo_animal_sexs
from .animal_sizes import seed_animal_sizes, undo_animal_sizes
from .animal_types import seed_animal_types, undo_animal_types
from .animal_vaccination_status import seed_animal_vaccination_status, undo_animal_vaccination_status

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_types()
    seed_users()
    seed_animal_ages()
    seed_animal_breeds()
    seed_animal_colors()
    seed_animal_sexs()
    seed_animal_sizes()
    seed_animal_types()
    seed_animal_vaccination_status()
    seed_pet_posts()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_pet_posts()
    undo_users()
    undo_types()
    undo_animal_ages()
    undo_animal_breeds()
    undo_animal_colors()
    undo_animal_sexs()
    undo_animal_sizes()
    undo_animal_types()
    undo_animal_vaccination_status()
    # Add other undo functions here
