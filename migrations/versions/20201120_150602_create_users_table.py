"""create_users_table

Revision ID: ffdc0a98111c
Revises:
Create Date: 2020-11-20 15:06:02.230689

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ffdc0a98111c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ACCOUNT TYPE
    op.create_table('account_types',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(50), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    )

    # ANIMAL TYPE
    op.create_table('animal_types',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(50), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    )

    # # SIZE
    # op.create_table('animal_sizes',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('size', sa.String(50), nullable=False),

    # sa.PrimaryKeyConstraint('id'),
    # )

    # SEX
    op.create_table('animal_sexs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sex', sa.String(50), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    )

    # AGE
    op.create_table('animal_ages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('age', sa.String(50), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    )

    # VACCINATION STATUS
    op.create_table('animal_vaccination_status',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('vaccination_status', sa.String(50), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    )

    # COLOR MANY to MANY
    op.create_table('animal_colors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('color', sa.String(50), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    )

    # BREED MANY to MANY
    op.create_table('animal_breeds',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('breed', sa.String(100), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    )


    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('account_type_id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=False, unique=True),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False, unique=True),
    sa.Column('bio', sa.String(length=2000)),
    sa.Column('hashed_password', sa.String(length=255), nullable=False, unique=True),
    sa.Column('profile_pic', sa.String(length=2000)),
    sa.Column('logo', sa.String(length=2000)),
    sa.Column('lat', sa.Numeric(), autoincrement=False),
    sa.Column('lng', sa.Numeric(), autoincrement=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    sa.ForeignKeyConstraint(['account_type_id'], ['account_types.id']),
    )


    op.create_table('pet_posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('type_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('sex_id', sa.Integer(), nullable=False),
    sa.Column('age_id', sa.Integer(), nullable=False),
    sa.Column('color_id', sa.Integer(), nullable=False),
    sa.Column('breed_id', sa.Integer(), nullable=True),
    sa.Column('pic_url1', sa.String(length=2000), nullable=True),
    sa.Column('pic_url2', sa.String(length=2000), nullable=True),
    sa.Column('pic_url3', sa.String(length=2000), nullable=True),
    sa.Column('characteristics', sa.String(length=300), nullable=True),
    sa.Column('vaccination_status_id', sa.Integer(), nullable=False),
    sa.Column('bio', sa.String(length=2000), nullable=True),
    sa.Column('question1', sa.String(length=500), nullable=True),
    sa.Column('question2', sa.String(length=500), nullable=True),
    sa.Column('question3', sa.String(length=500), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id']),
    sa.ForeignKeyConstraint(['type_id'], ['animal_types.id']),
    sa.ForeignKeyConstraint(['sex_id'], ['animal_sexs.id']),
    sa.ForeignKeyConstraint(['age_id'], ['animal_ages.id']),
    sa.ForeignKeyConstraint(['color_id'], ['animal_colors.id']),
    sa.ForeignKeyConstraint(['breed_id'], ['animal_breeds.id']),
    sa.ForeignKeyConstraint(['vaccination_status_id'], ['animal_vaccination_status.id'])
    )

    op.create_table('applications',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('answer1', sa.String(length=2000)),
    sa.Column('answer2', sa.String(length=2000)),
    sa.Column('answer3', sa.String(length=2000)),
    sa.Column('status', sa.Boolean()),
    sa.Column('created_at', sa.DateTime(), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['post_id'], ['pet_posts.id'], )
    )



def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###

    op.drop_table('pet_posts')
    op.drop_table('users')
    op.drop_table('account_types')
    op.drop_table('animal_sizes')
    op.drop_table('animal_sexs')
    op.drop_table('animal_ages')
    op.drop_table('animal_colors')
    op.drop_table('animal_breeds')
    op.drop_table('animal_vaccination_status')
    # ### end Alembic commands ###
